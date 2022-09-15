﻿/**
 * ModalContainer.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Web-specific implementation of a view that's used to render modals.
 */

import * as React from 'react';

import { Types } from '../common/Interfaces';

export class ModalContainer extends React.Component<Types.CommonProps<ModalContainer>, Types.Stateless> {
    constructor(props: Types.CommonProps<ModalContainer>) {
        super(props);
    }

    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default ModalContainer;
