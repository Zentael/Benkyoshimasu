import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';

const slide = direction => [
    query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
    group([
        query(':enter', [
            style({ transform: direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)'}),
            animate('0.5s ease-in-out',
                style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
            style({ transform:   'translateX(0%)'}),
            animate('0.5s ease-in-out',
                style({ transform: direction === 'left' ? 'translateX(100%)' : 'translateX(-100%)'}))
        ], { optional: true }),
    ])
];

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('exercices => exercice', slide('right')),
        transition('exercices => home', slide('left')),
        transition('exercice => exercices', slide('left')),
        transition('revisions => home', slide('right')),
        transition('home => revisions', slide('left')),
        transition('home => exercices', slide('right')),
    ]);
