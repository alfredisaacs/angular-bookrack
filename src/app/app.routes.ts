import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthorsComponent } from './authors/authors.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'books', component: BooksComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'authors', component: AuthorsComponent }
];
