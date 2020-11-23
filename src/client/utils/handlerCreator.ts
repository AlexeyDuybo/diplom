type OnlyFuncs<T extends object> = Pick<T, {
    [K in keyof T]: T[K] extends Function | undefined ? K : never
}[keyof T]>

function handlerCreator<Props extends object, P extends keyof OnlyFuncs<Props>>(props: Props, key: P): any {
    return (e: any) => {
        const handler = props[key];
        if (handler !== undefined) {
            handler(e);
        }
    };
};

export default handlerCreator;
