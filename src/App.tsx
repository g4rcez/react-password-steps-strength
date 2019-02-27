import React, { Component } from "react";
import InputPasswordStrength from "./password-strength";
import "antd/dist/antd.css";
import { Icon } from "antd";

class App extends Component {
    render() {
        return (
            <div style={{ margin: "auto", width: "70%", marginTop: "10%" }}>
                <InputPasswordStrength
                    useDefault
                    defaultIcons={{
                        assert: <Icon type="clock-circle-o" style={{ fontSize: "16px" }} />,
                        error: <Icon type="close" style={{ fontSize: "16px", color: "red" }} />,
                    }}
                    onChange={(e) => console.log("EU VEJO SUA SENHA", e.target.value)}
                    rules={[
                        {
                            matcher: (s: string) => s == "#S0uDevFodão",
                            error: <h1>Foda-se</h1>,
                            assert: "Você é um dev fodão",
                            icons: {
                                assert: <Icon type="copy" style={{ fontSize: "16px" }} />,
                                error: <Icon type="delete" style={{ fontSize: "16px", color: "red" }} />,
                            },
                            name: "Dev Fodão",
                        },
                        {
                            matcher: (s: string) => s == "#Abc123",
                            error: "Digite uma senha legal",
                            assert: "Porra, que senha merda",
                            name: "Dev Fodão",
                        },
                    ]}
                />
            </div>
        );
    }
}

export default App;
