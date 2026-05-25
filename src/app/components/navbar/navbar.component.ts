// src/app/components/navbar/navbar.component.ts
import { Component, HostListener, OnDestroy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService, Language } from '../../services/translation.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe, TranslatePipe],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnDestroy {
  menuOpen = false;
  langDropdownOpen = false;
  langDropdownMobileOpen = false;
  currentLang$!: Observable<Language>;
  private subscription: Subscription;

  constructor(private translationService: TranslationService) {
    this.currentLang$ = this.translationService.currentLang$;
    this.subscription = this.translationService.currentLang$.subscribe();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) {
      this.langDropdownMobileOpen = false;
    }
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.langDropdownMobileOpen = false;
  }

  toggleLangDropdown(): void {
    this.langDropdownOpen = !this.langDropdownOpen;
  }

  toggleLangDropdownMobile(): void {
    this.langDropdownMobileOpen = !this.langDropdownMobileOpen;
  }

  closeLangDropdownMobile(): void {
    this.langDropdownMobileOpen = false;
  }

  changeLanguage(lang: Language): void {
    this.translationService.setLanguage(lang);
    this.langDropdownOpen = false;
    this.langDropdownMobileOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const desktopDropdown = target.closest('.relative:not(.w-full)');
    const mobileDropdown = target.closest('.relative.w-full');
    if (!desktopDropdown && this.langDropdownOpen) {
      this.langDropdownOpen = false;
    }
    if (!mobileDropdown && this.langDropdownMobileOpen) {
      this.langDropdownMobileOpen = false;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}