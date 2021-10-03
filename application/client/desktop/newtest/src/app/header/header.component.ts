import { Component, OnInit, Inject } from '@angular/core';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';
import { LoginService } from '../login/login.service';
import { BroadcastService } from '../auth/broadcast.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
    private jwtToken: String;
public isAdminUser = false;
mysubscription: any;
public authArray: any;
public userId: string;
public currentLanguage: String;
public confirmLangChangeModal: String = 'none';
public language = 'en';
public languages = ['en', 'ta', 'es']
    constructor (
@Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService,
private router: Router,
private loginService: LoginService,
public broadcastService: BroadcastService
) {
	this.broadcastService.currentUserName.subscribe(headerPermission => {
        this.authArray = [];
        if (headerPermission !== undefined) {
            //   console.log('Headerpermission------->>>', headerPermission);
            for (let role in headerPermission) {
                console.log('-------role----', headerPermission[role])
                if (headerPermission[role].length >= 1) {
                    this.authArray = headerPermission[role];
                }
            }
        }
    });
	this.mysubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
            this.router.navigated = false;
        }
    })
	this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
    }
}

    ngOnInit() {
        this.userId = sessionStorage.getItem('Id');
    }
private updateState(lang: string) {
		this.language = lang;
		}
changeLanguage(lang) {
		if (lang !== this.i18NextService.language) {
		this.i18NextService.changeLanguage(lang).then(x => {
		this.updateState(lang);
		});
		}
		this.userId = sessionStorage.getItem('Id');
		if (this.userId !== null) {
		this.logout();
		} else {
		document.location.reload();
		}
		}
onCloseHandled() {
		this.confirmLangChangeModal = 'none';
		}
confirmLangChange() {
		this.changeLanguage(this.currentLanguage);
		this.onCloseHandled();
		}
confirmLangModel(lang) {
		this.userId= sessionStorage.getItem('Id');
		if (this.userId !== null) {
		this.confirmLangChangeModal = 'block';
		this.currentLanguage = lang;
		} else {
		this.changeLanguage(lang);
		this.onCloseHandled();
		}
		}
isApplicable(value) {
		if (this.authArray !== undefined) {
			return this.authArray.filter(routename => routename == value).length > 0;
		}
    }
 logout() {
		const temp = {
			 id: sessionStorage.getItem('Id')
		};
		this.loginService.Logout(temp).subscribe(data => {
			sessionStorage.clear();
		this.userId = sessionStorage.getItem('Id');
		this.router.navigate(['']);
		}, error => {
			console.error('error:', error);
		});
		}
}