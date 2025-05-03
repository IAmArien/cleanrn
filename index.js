/**
 * @format
 */

import "reflect-metadata";
import "./src/frameworks/di/container";

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
