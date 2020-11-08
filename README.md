# vue-froalacharts

Simple and lightweight Vue component for FroalaCharts. `vue-froalacharts` enables you to add JavaScript charts in your Vue application or project without any hassle.

- Github Repo: [https://github.com/froala/vue-froalacharts](https://github.com/froala/vue-froalacharts)
- Documentation: [https://froala.com/charts/docs/frameworks/vue/](https://froala.com/charts/docs/frameworks/vue/)
- Support: [support@froala.com](support@froala.com)
- FroalaCharts
  - Official Website: [https://froala.com/](https://froala.com/)
  - Official NPM Package: [https://www.npmjs.com/package/froalacharts](https://www.npmjs.com/package/froalacharts)
- Issues: [https://github.com/froala/vue-froalacharts/issues](https://github.com/froala/vue-froalacharts/issues)

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
- [Quick Start](#quick-start)
- [For Contributors](#for-contributors)
- [Licensing](#licensing)

## Getting Started

### Requirements

- **Node.js**, **NPM/Yarn** installed globally in your OS.
- **FroalaCharts** and **Vue** installed in your project, as detailed below:

## Installation

**Direct Download**
All binaries are located on our [github repository](https://github.com/froala/vue-froalacharts).

**Install from NPM**

```bash
npm install vue-froalacharts --save
```

**Install from Yarn**

```bash
yarn add vue-froalacharts
```

**Include in your script**

Download `vue-froalacharts.js` and include it in the HTML `<script>` tag.

```html
<script src="vue-froalacharts.js" type="text/javascript"></script>
```

### Usage

There are two ways of adding `vue-froalacharts` component in your project

**Registering globally as a plugin**
Import `vue`, `vue-froalacharts` and FroalaCharts in main app file.

```js
import Vue from `vue`;
import VueFroalaCharts from 'vue-froalacharts';

// import FroalaCharts modules and resolve dependency
import FroalaCharts from 'froalacharts';
```

Now, register it as plugin in Vue object

```js
Vue.use(VueFroalaCharts, FroalaCharts);
```

This way is recommended when you want component (`vue-froalacharts` ) available from everywhere in your app.

**Registering locally in your component**
Import the chart component from `vue-froalacharts/component` package in your component file and use `Vue.component` to register it locally.

```js
import Vue from `vue`;
import VueFroalaChartsComponent from 'vue-froalacharts/component';

// import FroalaCharts modules and resolve dependency
import FroalaCharts from 'froalacharts';

const vueFroalaCharts = VueFroalaChartsComponent(FroalaCharts);

Vue.component('froalacharts', vueFroalaCharts);
```

This way is recommended when you want component (`vue-froalacharts` ) only in specific components of your app.

Where `eventName` can be any FroalaCharts event. You can find the list of events at [froalacharts docs](https://froala.com/charts/docs/api/events/)

## Quick Start

Here is a basic sample that shows how to create a chart using `vue-froalacharts`:

```js
import Vue from 'vue';
import VueFroalaCharts from 'vue-froalacharts';
import FroalaCharts from 'froalacharts';

// register VueFroalaCharts component
Vue.use(VueFroalaCharts, FroalaCharts);

const myDataSource = {
  chart: {
    caption: 'Recommended Portfolio Split',
    subCaption: 'For a net-worth of $1M',
    showValues: '1',
    showPercentInTooltip: '0',
    numberPrefix: '$',
    enableMultiSlicing: '1',
    theme: 'froala'
  },
  data: [
    {
      label: 'Equity',
      value: '300000'
    },
    {
      label: 'Debt',
      value: '230000'
    },
    {
      label: 'Bullion',
      value: '180000'
    },
    {
      label: 'Real-estate',
      value: '270000'
    },
    {
      label: 'Insurance',
      value: '20000'
    }
  ]
};

const chart = new Vue({
  el: '#app',
  data: {
    type: 'pie',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: myDataSource
  }
});
```

Here's HTML template for the above example:

```html
<div id="app">
  <froalacharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
  >
  </froalacharts>
</div>
```

links to help you get started:

- [Documentation](https://froala.com/charts/docs/frameworks/vue/)
- [FroalaCharts API](https://froala.com/charts/docs/api/options/)
- [Chart gallery](https://froala.com/charts/tour/)

## For Contributors

- Clone the repository and install dependencies

```
$ git clone https://github.com/froala/vue-froalacharts.git
$ cd vue-froalacharts
$ npm install
```

- Run `npm start` to start the dev server and point your browser at [http://localhost:8080/](http://localhost:8080/).

## Licensing

The FroalaCharts Vue component is open-source and distributed under the terms of the MIT/X11 License. However, you will need to download and include FroalaCharts library in your page separately, which has a [separate license](https://www.ideracorp.com/Legal/Froala/FroalaChartsLicenseAgreement).