export type DefaultPropsType<Props extends object, DefaultProps extends Partial<Props>> = DefaultProps

type RemoveOptional<Props extends object, DefaultProps extends Partial<Props>> = {
    [K in keyof Props & keyof DefaultProps]: Exclude<Props[K], undefined>
} & Omit<Props, keyof DefaultProps>

export type PropsType<Props extends object, DefaultProps extends Partial<Props>> = {
    [K in keyof RemoveOptional<Props, DefaultProps>]: RemoveOptional<Props, DefaultProps>[K]
}
