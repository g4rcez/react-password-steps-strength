import * as React from "react";
import defaults from "./defaults";
import { Input, Timeline } from "antd";

export type RuleObject = {
    name: string;
    error: React.ReactNode;
    assert: React.ReactNode;
    matcher: Function;
    icons?: {
        assert: React.ReactNode;
        error: React.ReactNode;
    };
};

export type DefaultIcons = {
    assert: React.ReactNode;
    error: React.ReactNode;
};

type Props = {
    rules?: RuleObject[];
    textStyle?: object;
    inputStyle?: object;
    useDefault?: Boolean;
    selfControl?: Boolean;
    defaultIcons?: DefaultIcons;
    onChange(e: React.ChangeEvent<HTMLInputElement>): any;
};

const check = (correct: boolean) => {
    return function(assert: React.ReactNode, error: React.ReactNode) {
        return correct ? assert : error;
    };
};

function findType(object: RuleObject, value: string, key: number, defaultIcons?: DefaultIcons, textStyle?: object) {
    const error = object.matcher(value);
    const withError = check(error);
    const props = { key, style: { ...textStyle } };
    const customIcon = typeof object.icons === "string" || typeof object.icons === "undefined";
    if (defaultIcons && customIcon) {
        return withError(
            <Timeline.Item {...props} dot={defaultIcons.assert}>
                {object.assert}
            </Timeline.Item>,
            <Timeline.Item {...props} dot={defaultIcons.error}>
                {object.error}
            </Timeline.Item>
        );
    }
    if (typeof object.icons === "undefined") {
        return withError(
            <Timeline.Item {...props}>{object.assert}</Timeline.Item>,
            <Timeline.Item {...props} color="red">
                {object.error}
            </Timeline.Item>
        );
    }
    return withError(
        <Timeline.Item {...props} dot={object.icons.assert}>
            {object.assert}
        </Timeline.Item>,
        <Timeline.Item {...props} dot={object.icons.error}>
            {object.error}
        </Timeline.Item>
    );
}

export default class InputPasswordStrength extends React.Component<Props, any> {
    constructor(props: any) {
        super(props);
        const initial = {
            defaults,
            input: "",
            selfControl: this.props.selfControl === undefined ? false : false,
            useDefault: this.props.useDefault === undefined ? true : false,
        };
        if (!this.props.useDefault) {
            initial.defaults = this.props.rules || [];
        } else {
            // @ts-ignore
            initial.defaults = initial.defaults.concat(this.props.rules);
        }
        this.state = { ...initial };
    }

    public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ input: e.target.value });
        // const rules = this.state.defaults.map(x => )
        return this.props.onChange ? this.props.onChange(e) : e;
    };

    public render() {
        return (
            <React.Fragment>
                <Input.Password onChange={this.onChange} style={{ marginBottom: "1rem", ...this.props.inputStyle }} />
                {!this.props.selfControl && (
                    <Timeline>
                        {this.state.defaults.map((x: RuleObject, i: number) =>
                            findType(x, this.state.input, i, this.props.defaultIcons, this.props.textStyle)
                        )}
                    </Timeline>
                )}
            </React.Fragment>
        );
    }
}
