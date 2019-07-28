import TextFieldComponent from '../textfield/TextField';

export default class PhoneNumberComponent extends TextFieldComponent {
  static schema(...extend) {
    return TextFieldComponent.schema({
      type: 'phoneNumber',
      label: '手机号码',
      key: 'phoneNumber',
      inputType: 'tel',
      inputMask: '13511111111'
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: '手机号码',
      group: 'advanced',
      icon: 'phone-square',
      weight: 30,
      documentation: 'http://help.form.io/userguide/#phonenumber',
      schema: PhoneNumberComponent.schema()
    };
  }

  get defaultSchema() {
    return PhoneNumberComponent.schema();
  }
}
