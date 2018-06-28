
import {trigger, state, animate, style, transition} from '@angular/animations';

export function routerTransition() {
    return slideToLeft();
}

function slideToLeft() {
    return trigger('routerTransition', [
        state('void', style({position: 'fixed', width: '100%'}) ),
        state('*', style({position: 'fixed', width:'100%'}) ),
        transition(':enter', [  // before 2.1: transition('void => *', [
            style({transform: 'translateX(100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [  // before 2.1: transition('* => void', [
            style({transform: 'translateX(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
        ])
    ]);
}


export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [

        // route 'enter' transition
        transition(':enter', [

            // css styles at start of transition
            style({ opacity: 0 }),

            // animation and styles at end of transition
            animate('.3s', style({ opacity: 1 }))
        ]),
    ]);