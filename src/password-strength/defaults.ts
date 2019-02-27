import { NumberMatcher, UpperCaseMatcher, LowerCaseMatcher, SpecialCharMatcher } from "./matcher";
import { RuleObject } from ".";

const defaults: RuleObject[] = [
    {
        matcher: NumberMatcher,
        error: "Password require a number",
        assert: "Your password has a number",
        name: "numberMatcher",
    },
    {
        matcher: UpperCaseMatcher,
        error: "Password require a upper case char",
        assert: "Your password has a upper case char",
        name: "upperCaseMatcher",
    },
    {
        matcher: LowerCaseMatcher,
        error: "Password require a lower case char",
        assert: "Your password has a lower case char",
        name: "lowerCaseMatcher",
    },
    {
        matcher: SpecialCharMatcher,
        error: "Password require a special char",
        assert: "Your password has a special char",
        name: "specialCharMatcher",
    },
];

export default defaults;
