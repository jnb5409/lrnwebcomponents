const $_documentContainer = document.createElement("div");
$_documentContainer.setAttribute("style", "display: none;");

$_documentContainer.innerHTML = `<dom-module id="shared-style">
  <template>
    <style>
      /* Theming - Custom CSS  properties */
      :root {
        --paper-radio-button-checked-ink-color: #4285f4;
        --paper-radio-button-checked-color: #4285f4;
        --paper-radio-button-unchecked-color: #4285f4;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer);

/*
Copyright (c) 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/