import {Injectable} from '@angular/core';
import {forkJoin, Observable, Subscriber} from 'rxjs';
import {ApiKeyword} from '../../interfaces/api/api-keyword';
import {ApiCommand} from '../../interfaces/api/api-command';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LanguageService {
  public keywords: object;
  public deprecatedKeywords: object;
  public commands: object;
  public deprecatedCommands: object;

  constructor(private http: HttpClient) {
  }

  public initialize(): Observable<void> {
    return new Observable((observer: Subscriber<void>) => {
      this.keywords = {};
      this.deprecatedKeywords = {};
      this.commands = {};
      this.deprecatedCommands = {};

      let backendRequests: any[] = [
        this.http.get('http://api.blitzbasicscript.com/keywords?deprecated=false'),
        this.http.get('http://api.blitzbasicscript.com/keywords?deprecated=true'),
        this.http.get('http://api.blitzbasicscript.com/commands?deprecated=false'),
        this.http.get('http://api.blitzbasicscript.com/keywords?deprecated=true')
      ];

      forkJoin(backendRequests).subscribe((responses: any[]) => {
        if (responses[0].status === 'success') {
          responses[0].data.forEach((apiKeyword: ApiKeyword) => {
            this.keywords[apiKeyword.name.toLowerCase()] = true;
          });
        }

        if (responses[1].status === 'success') {
          responses[1].data.forEach((apiKeyword: ApiKeyword) => {
            this.deprecatedKeywords[apiKeyword.name.toLowerCase()] = true;
          });
        }

        if (responses[2].status === 'success') {
          responses[2].data.forEach((apiCommand: ApiCommand) => {
            this.commands[apiCommand.name.toLowerCase()] = true;
          });
        }

        if (responses[3].status === 'success') {
          responses[3].data.forEach((apiCommand: ApiCommand) => {
            this.deprecatedCommands[apiCommand.name.toLowerCase()] = true;
          });
        }

        observer.next();
        observer.complete();
      });
    });
  }
}
