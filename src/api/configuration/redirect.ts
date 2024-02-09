let redirectToForbiddenPageFunction: any = null;
let redirectToUnauthorizedPageFunction: any = null;

export const redirectToForbiddenPage = () => {
    if (redirectToForbiddenPageFunction) {
        redirectToForbiddenPageFunction('/forbidden');
    }
};

export const redirectToUnauthorizedPage = () => {
    if (redirectToUnauthorizedPageFunction) {
        redirectToUnauthorizedPageFunction('/unauthorized');
    }
};

export const setRedirectToForbiddenPageFunction = (fn: any) => {
    redirectToForbiddenPageFunction = fn;
};

export const setRedirectToUnauthorizedPageFunction = (fn: any) => {
    redirectToUnauthorizedPageFunction = fn;
};
