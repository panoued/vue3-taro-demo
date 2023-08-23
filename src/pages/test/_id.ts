import { Component, toNative } from "vue-facing-decorator";
import { BaseVue } from "@/base/BaseVue";
import './_id.scss';

@Component
class TestIdView extends BaseVue {

};

export default toNative(TestIdView);