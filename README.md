
<a href="https://www.npmjs.com/package/watch-state">
  <img src="https://raw.githubusercontent.com/d8corp/watch-state/v3.3.3/img/logo.svg" align="left" width="90" height="90" alt="Watch-State logo by Mikhail Lysikov">
</a>

# &nbsp; @watch-state/react-modal

&nbsp;

[![NPM](https://img.shields.io/npm/v/@watch-state/react-modal.svg)](https://www.npmjs.com/package/@watch-state/react-modal)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@watch-state/react-modal)](https://bundlephobia.com/result?p=@watch-state/react-modal)
[![downloads](https://img.shields.io/npm/dm/@watch-state/react-modal.svg)](https://www.npmtrends.com/@watch-state/react-modal)
[![changelog](https://img.shields.io/badge/changelog-⋮-brightgreen)](https://changelogs.xyz/@watch-state/react-modal)
[![license](https://img.shields.io/npm/l/@watch-state/react-modal)](https://github.com/d8corp/watch-state-react-modal/blob/main/LICENSE)

Popups with [React](https://reactjs.org) and [watch-state](https://www.npmjs.com/package/watch-state).

[![stars](https://img.shields.io/github/stars/d8corp/watch-state-react-modal?style=social)](https://github.com/d8corp/watch-state-react-modal/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/watch-state-react-modal?style=social)](https://github.com/d8corp/watch-state-react-modal/watchers)

### Install
npm
```bash
npm i @watch-state/react-modal
```
yarn
```bash
yarn add @watch-state/react-modal
```

### Usage
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

