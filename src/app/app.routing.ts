import { RouterModule, Routes } from '@angular/router';

import { PostPageComponent } from './post-page/post-page.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';

const APP_ROUTES: Routes = [
    {path:"", redirectTo: "linhaTempo", pathMatch:"full"},
    {path:"linhaTempo", component:LinhaDoTempoComponent},
    {path:"post-page", component:PostPageComponent},

    {path:"linhaTempo/post-page/:id", component:PostPageComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);