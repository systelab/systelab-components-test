import { by } from 'protractor';
import { Widget } from './widget-test';
import { Button } from './button-test';

export class SystelabDialogTest extends Widget {

	public async getNumberOfButtons():Promise<number> {
		return await this.elem
			.element(by.tagName('systelab-dialog-bottom'))
			.all(by.tagName('button')).count();
	}

	public async getTitle(): Promise<string> {
		return await this.elem
			.element(by.tagName('systelab-dialog-header'))
			.element(by.className('slab-dialog-header')).getText();
	}

	public getButtonClose() {
		return this.elem
			.element(by.className('slab-dialog-close'));
	}

	public getButtonByName(name: string): Button {
		return new Button(this.elem
			.element(by.buttonText(name)));
	}
}
