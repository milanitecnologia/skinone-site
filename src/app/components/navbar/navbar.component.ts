// navbar.component.ts
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menuOpen = false;
  langDropdownOpen = false;
  currentLang: string = 'pt';

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleLangDropdown(): void {
    this.langDropdownOpen = !this.langDropdownOpen;
  }

  changeLanguage(lang: string): void {
    this.currentLang = lang;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    this.langDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const dropdown = target.closest('.relative');
    if (!dropdown && this.langDropdownOpen) {
      this.langDropdownOpen = false;
    }
  }
}