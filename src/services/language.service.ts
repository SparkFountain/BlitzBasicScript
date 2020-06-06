import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LanguageService {
  public keywords: object;
  public deprecatedKeywords: object;
  public commands: object;
  public deprecatedCommands: object;

  constructor(private http: HttpClient) {
    this.initialize();
  }

  public async initialize(): Promise<void> {
    console.info('Initializing Language Service...');

    this.keywords = {};
    this.deprecatedKeywords = {};
    this.commands = {};
    this.deprecatedCommands = {};

    return this.http
      .get('/assets/keywords.json')
      .toPromise()
      .then(() => {
        this.http
          .get('/assets/commands.json')
          .toPromise()
          .then(() => {
            // this.keywords = files[0];
            // this.commands = files[1];

            // if (responses[1].status === 'success') {
            //     responses[1].data.forEach((apiKeyword: ApiKeyword) => {
            //         this.deprecatedKeywords[apiKeyword.name.toLowerCase()] = true;
            //     });
            // }

            // if (responses[2].status === 'success') {
            //     responses[2].data.forEach((apiCommand: ApiCommand) => {
            //         this.commands[apiCommand.name.toLowerCase()] = apiCommand;
            //     });
            // }

            // if (responses[3].status === 'success') {
            //     responses[3].data.forEach((apiCommand: ApiCommand) => {
            //         this.deprecatedCommands[apiCommand.name.toLowerCase()] = apiCommand;
            //     });
            // }

            console.info('Done');
          });
      });
  }
}
