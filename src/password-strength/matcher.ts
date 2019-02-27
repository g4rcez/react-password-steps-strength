export function NumberMatcher(string: string): Boolean {
    return !!string.match(/(?=.*[0-9])/g);
}
export function LowerCaseMatcher(string: string) {
    return !!string.match(/(?=.*[a-z])/g);
}
export function UpperCaseMatcher(string: string) {
    return !!string.match(/(?=.*[A-Z])/g);
}
export function SpecialCharMatcher(string: string) {
    return !!string.match(/(?=.*[ç~^;\/\\!@#$%¨&*()])/g);
}
