// ICONS
export type SvgIconColor = 'black' | 'white';

export interface IIconObj {
    title: string,
    icon: JSX.Element;
    href: string;
}

// CREATE FRAMER ANIMATION FUNCTION TYPES/INTARFACES
export interface IAnimationValues {
    y?: number | string,
    x?: number | string,
    opacity?: number,
    scale?: number,
    duration?: number,
    delay?: number
}

export interface IInitialObject {
    y: string | number;
    x: string | number;
    opacity: number;
    scale: number;
}

export interface IAnimateObject {
    y: number;
    x: number;
    opacity: number;
    scale: number;
}

export interface ITransitionObject {
    duration: number;
    delay: number;
}

export type AnimationObjectsArray = [IInitialObject, IAnimateObject, ITransitionObject];
// FIREBASE GALLERY LIST

export interface IWorkInfo {
    name: string,
    description: string
};

export type ImagesArray = Array<File>;
export type ChildFolders = 'before' | 'after';

// FIREBASE SERVICES LIST 

export interface IServiceItem {
    room: 'male' | 'female',
    name: string,
    description: string,
    price: string
};

export type ServiceList = Array<IServiceItem>;

// FIREBASE FEEDBACK

export interface ICommentObj {
    id: string,
    name: string,
    comment: string
}
