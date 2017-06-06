import React, {Component} from 'react';
import 'onsenui';
import {Page, Navigator, Button, Input} from 'react-onsenui';




class PageOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
                <div>
                    <h1>Hello, world!</h1>
                </div>
            </Page>
        );
    }
}


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    renderPage(route, navigator) {
        const props = route.props || {};
        props.navigator = navigator;

        return React.createElement(route.component, props);
    }

    render() {
        return (
            <Navigator
                initialRoute={{
                    component: PageOne
                }}
                renderPage={this.renderPage.bind(this)}
            />
        );
    }
}
