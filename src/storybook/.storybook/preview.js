import withDark from '../decorators/withDark'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [withDark]