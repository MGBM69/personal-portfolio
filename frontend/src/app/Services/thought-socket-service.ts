import { Injectable } from '@angular/core';
import { Client, IMessage } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ThoughtSocketService {
  private stompClient!: Client;

  constructor() {}

  connect(onMessageReceived: (thought: any) => void): void {
    this.stompClient = new Client({
      // Connect to Spring Boot endpoint
      webSocketFactory: () => new SockJS.default(`${environment.wsUrl}`),

      reconnectDelay: 5000,

      debug: (str) => {
        console.log('WebSocket Debug:', str);
      },
    });

    this.stompClient.onConnect = () => {
      console.log(' Connected to WebSocket');

      // Subscribe to server broadcast
      this.stompClient.subscribe(
        '/server2client/thoughts',
        (message: IMessage) => {
          const thought = JSON.parse(message.body);
          onMessageReceived(thought);
        },
      );
    };

    this.stompClient.onStompError = (frame) => {
      console.error(' Broker error:', frame.headers['message']);
      console.error('Details:', frame.body);
    };

    this.stompClient.activate();
  }

  disconnect(): void {
    if (this.stompClient) {
      this.stompClient.deactivate();
    }
  }
}
