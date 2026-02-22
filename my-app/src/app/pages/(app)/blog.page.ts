import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export default class BlogLayoutComponent {}
