/* eslint-disable no-undef */
import React { useState} from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import { schema } from './schema'

function  Form() {
    const initialData = {
        username: "",
        email: "",
        password: "",
        checkedPassword: "",
        termsService: false,
        

    }
};