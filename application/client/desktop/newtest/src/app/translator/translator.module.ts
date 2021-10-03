import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  I18NEXT_SERVICE, I18NextLoadResult, I18NextModule, ITranslationService, defaultInterpolationFormat,
  I18NEXT_NAMESPACE
} from 'angular-i18next';
import i18nextXHRBackend from 'i18next-xhr-backend';
import i18nextLanguageDetector from 'i18next-browser-languagedetector';
import { I18NextValidationMessageModule } from 'angular-validation-message-i18next';
import sprintf from 'i18next-sprintf-postprocessor';
import { APP_INITIALIZER, ApplicationRef, LOCALE_ID } from '@angular/core';

const i18nextOptions = {
  whitelist: ['en', 'ta', 'es'],
  fallbackLng: ['en', 'ta', 'es'],
  debug: true, // set debug?
  returnEmptyString: false,
  ns: [
    'translation',
    'validation',
    'error'
  ],
  interpolation: {
    format: I18NextModule.interpolationFormat(defaultInterpolationFormat)
  },
  // backend plugin options
  backend: {
    allowMultiLoading: true,
    loadPath: function () {
      return 'assets/locales/{{lng}}/{{ns}}.json';
    }

  },
};

export function appInit(i18next: ITranslationService) {
  return () => {
    const promise: Promise<I18NextLoadResult> = i18next
      .use(i18nextXHRBackend)
      .use(i18nextLanguageDetector)
      .use(sprintf)
      .init(i18nextOptions);
    return promise;
  };
}

export function localeIdFactory(i18next: ITranslationService) {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    I18NextValidationMessageModule,
    I18NextModule.forRoot(),
  ],
  providers: [I18N_PROVIDERS],
  exports: [
    I18NextValidationMessageModule,
    I18NextModule
  ]
})
export class TranslatorModule { }