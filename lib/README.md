# @watch-state/react-modal
[![NPM](https://img.shields.io/npm/v/@watch-state/react-modal.svg)](https://github.com/d8corp/watch-state-react-modal/blob/master/CHANGELOG.md)
[![downloads](https://img.shields.io/npm/dm/@watch-state/react-modal.svg)](https://www.npmjs.com/package/@watch-state/react-modal)
[![license](https://img.shields.io/npm/l/@watch-state/react-modal)](https://github.com/d8corp/watch-state-react-modal/blob/master/LICENSE)  
Cool popups with [React 16.8+](https://reactjs.org) and [watch-state](https://mobx.js.org).
### Installation
npm
```bash
npm i @watch-state/react-modal
```
yarn
```bash
yarn add @watch-state/react-modal
```
### Using
All modals should be placed into `Modals`.
```typescript jsx
import Modal, {Modals} from '@watch-state/react-modal'
import theme from '@watch-state/react-modal/theme/default.module.scss'

export default () => (
  <Modals className={theme.modals}>
    <Modal delay={300} classNames={theme}>
      Test modal
    </Modal>
  </Modals>
)
```
## Issues
If you find a bug, please file an issue on [GitHub](https://github.com/d8corp/watch-state-react-modal/issues)  
[![issues](https://img.shields.io/github/issues-raw/d8corp/watch-state-react-modal)](https://github.com/d8corp/watch-state-react-modal/issues)  
> ---
[![stars](https://img.shields.io/github/stars/d8corp/watch-state-react-modal?style=social)](https://github.com/d8corp/watch-state-react-modal/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/watch-state-react-modal?style=social)](https://github.com/d8corp/watch-state-react-modal/watchers)

