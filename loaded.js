'use strict'

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Application Name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'An electron-vue project'
    },
    eslint: {
      type: 'confirm',
      require: true,
      message: 'Enable ESLint (extends `standard`)?',
      default: true
    },
    plugins: {
      type: 'checkbox',
      message: 'Select which Vue plugins to install',
      choices: ['vue-electron', 'vue-resource', 'vue-router', 'vuex'],
      default: ['vue-electron', 'vue-resource', 'vue-router', 'vuex']
    }
  },
  helpers: {
    isEnabled (list, check, opts) {
      if (list[check]) return opts.fn(this)
      else return opts.inverse(this)
    },
    deps (plugins) {
      let output = ''
      let dependencies = {
        "vue-electron": "^1.0.0",
        "vue-resource": "^0.7.0",
        "vue-router": "^0.7.13",
        "vuex": "^0.6.3"
      }

      if (Object.keys(plugins).length > 0) output += ',\n'

      Object.keys(plugins).forEach((p, i) => {
        output += `    "${p}": "${dependencies[p]}"`
        if (i !== Object.keys(plugins).length - 1) output += ',\n'
      })

      return output
    }
  },
