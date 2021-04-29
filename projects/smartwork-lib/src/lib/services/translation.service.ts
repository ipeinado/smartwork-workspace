import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private availableLanguages: any =  {
    "en": {
      "showPreferences": "+ show preferences",
      "hidePreferences": "- hide preferences",
      "reset": "reset",
      "fontsize.title": "Font size",
      "fontsize.description": "Adjust text size",
      "linespacing.title": "Line Spacing",
      "linespacing.description": "Adjust the spacing between lines of text",
      "textstyle.title": "Text style",
      "textstyle.description": "Change the font used",
      "contrast.title": "Contrast",
      "contrast.description": "Change text and background colours",
      "toc.title": "Table of contents",
      "toc.description": "Create a table of contents",
      "enhanceinputs.title": "Enhance inputs",
      "enhanceinputs.description": "Emphasize links, buttons, menus, textfields, and other inputs"
    },
    "pt": {
      "showPreferences": "+ show preferences",
      "hidePreferences": "- hide preferences",
      "reset": "reset",
      "fontsize.title": "Font size",
      "fontsize.description": "Adjust text size",
      "linespacing.title": "Line Spacing",
      "linespacing.description": "Adjust the spacing between lines of text",
      "textstyle.title": "Text style",
      "textstyle.description": "Change the font used",
      "contrast.title": "Contrast",
      "contrast.description": "Change text and background colours",
      "toc.title": "Table of contents",
      "toc.description": "Create a table of contents",
      "enhanceinputs.title": "Enhance inputs",
      "enhanceinputs.description": "Emphasize links, buttons, menus, textfields, and other inputs"
    },
    "el": {
      "showPreferences": "+ show preferences",
      "hidePreferences": "- hide preferences",
      "reset": "reset",
      "fontsize.title": "Font size",
      "fontsize.description": "Adjust text size",
      "linespacing.title": "Line Spacing",
      "linespacing.description": "Adjust the spacing between lines of text",
      "textstyle.title": "Text style",
      "textstyle.description": "Change the font used",
      "contrast.title": "Contrast",
      "contrast.description": "Change text and background colours",
      "toc.title": "Table of contents",
      "toc.description": "Create a table of contents",
      "enhanceinputs.title": "Enhance inputs",
      "enhanceinputs.description": "Emphasize links, buttons, menus, textfields, and other inputs"
    },
    "da": {
      "showPreferences": "+ show preferences",
      "hidePreferences": "- hide preferences",
      "reset": "reset",
      "fontsize.title": "Font size",
      "fontsize.description": "Adjust text size",
      "linespacing.title": "Line Spacing",
      "linespacing.description": "Adjust the spacing between lines of text",
      "textstyle.title": "Text style",
      "textstyle.description": "Change the font used",
      "contrast.title": "Contrast",
      "contrast.description": "Change text and background colours",
      "toc.title": "Table of contents",
      "toc.description": "Create a table of contents",
      "enhanceinputs.title": "Enhance inputs",
      "enhanceinputs.description": "Emphasize links, buttons, menus, textfields, and other inputs"
    }
  }

  constructor(
    private translateService: TranslateService
  ) { }

  public init(language: string = null) {
    if (language) {
      this.translateService.setTranslation(language, this.availableLanguages[language], true);
    } else {
      Object.keys(this.availableLanguages).forEach((language) => {
        this.translateService.setTranslation(language, this.availableLanguages[language], true);
      });
    }
  }
}