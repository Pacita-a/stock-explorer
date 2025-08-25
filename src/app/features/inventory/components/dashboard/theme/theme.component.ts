import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {
  public darkMode: boolean = false;

  ngOnInit() {
    const savedTheme =
      localStorage.getItem('selected-theme') || 'lara-light-indigo';
    this.darkMode = savedTheme.includes('arya');
    this.changeTheme(savedTheme);
  }

  public toggleTheme() {
    const theme = this.darkMode ? 'arya-blue' : 'lara-light-indigo';
    this.changeTheme(theme);
  }

  private changeTheme(theme: string) {
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `assets/themes/${theme}/theme.css`;
      localStorage.setItem('selected-theme', theme);
    }
  }
}
