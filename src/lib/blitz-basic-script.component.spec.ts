import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BlitzBasicScriptComponent} from './blitz-basic-script.component';

describe('BlitzbasicscriptComponent', () => {
    let component: BlitzBasicScriptComponent;
    let fixture: ComponentFixture<BlitzBasicScriptComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BlitzBasicScriptComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlitzBasicScriptComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
