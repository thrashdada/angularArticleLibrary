import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'; 
import { ArticleListComponent } from './article-list/article-list.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

export const router: Routes = [
    { path: '', redirectTo: 'article-list', pathMatch: 'full' },
    { path: 'article-list', component: ArticleListComponent },
    { path: 'privacypolicy', component: PrivacypolicyComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);