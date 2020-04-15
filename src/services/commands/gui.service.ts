import { Injectable } from '@angular/core';
import { CommandsGuiButtonService } from './gui/button.service';
import { CommandsGuiCanvasService } from './gui/canvas.service';
import { CommandsGuiDesktopService } from './gui/desktop.service';
import { CommandsGuiDiverseService } from './gui/diverse.service';
import { CommandsGuiEventService } from './gui/event.service';
import { CommandsGuiGadgetService } from './gui/gadget.service';
import { CommandsGuiHtmlService } from './gui/html.service';
import { CommandsGuiIconStripService } from './gui/icon-strip.service';
import { CommandsGuiListTabberService } from './gui/list-tabber.service';
import { CommandsGuiMenuService } from './gui/menu.service';
import { CommandsGuiPanelService } from './gui/panel.service';
import { CommandsGuiProgressBarService } from './gui/progress-bar.service';
import { CommandsGuiRequestService } from './gui/request.service';
import { CommandsGuiSliderService } from './gui/slider.service';
import { CommandsGuiTextAreaService } from './gui/text-area.service';
import { CommandsGuiTextFieldService } from './gui/text-field.service';
import { CommandsGuiToolbarService } from './gui/toolbar.service';
import { CommandsGuiTreeViewService } from './gui/tree-view.service';
import { CommandsGuiWindowService } from './gui/window.service';
import { ButtonComponent } from 'bbscript/src/components/button/button.component';
import { GuiButtonStyle } from 'bbscript/src/enums/gui/buttons/button-style';
import { BlitzBasicScriptCanvasComponent } from 'bbscript/src/components/canvas/canvas.component';
import { Desktop } from 'bbscript/src/interfaces/gui/desktop';

@Injectable()
export class CommandsGUIService {
  constructor(
    private buttonService: CommandsGuiButtonService,
    private canvasService: CommandsGuiCanvasService,
    private desktopService: CommandsGuiDesktopService,
    private diverseService: CommandsGuiDiverseService,
    private eventService: CommandsGuiEventService,
    private gadgetService: CommandsGuiGadgetService,
    private htmlService: CommandsGuiHtmlService,
    private iconStripService: CommandsGuiIconStripService,
    private listTabberService: CommandsGuiListTabberService,
    private menuService: CommandsGuiMenuService,
    private panelService: CommandsGuiPanelService,
    private progressBarService: CommandsGuiProgressBarService,
    private requestService: CommandsGuiRequestService,
    private sliderService: CommandsGuiSliderService,
    private textAreaService: CommandsGuiTextAreaService,
    private textFieldService: CommandsGuiTextFieldService,
    private toolbarService: CommandsGuiToolbarService,
    private treeViewService: CommandsGuiTreeViewService,
    private windowService: CommandsGuiWindowService
  ) {}

  // BUTTON
  async buttonState(button: ButtonComponent): Promise<boolean> {
    return this.buttonService.buttonState(button);
  }

  async createButton(
    text: string,
    x: number,
    y: number,
    width: number,
    height: number,
    group: any,
    style?: GuiButtonStyle
  ): Promise<ButtonComponent> {
    return this.buttonService.createButton(text, x, y, width, height, group, style);
  }

  async setButtonState(button: ButtonComponent, active: boolean): Promise<void> {
    return this.buttonService.setButtonState(button, active);
  }

  // CANVAS
  async createCanvas(
    x: number,
    y: number,
    width: number,
    height: number,
    group: any,
    style?: any
  ): Promise<BlitzBasicScriptCanvasComponent> {
    return this.canvasService.createCanvas(x, y, width, height, group, style);
  }

  async flipCanvas(canvas: BlitzBasicScriptCanvasComponent, flip: boolean) {
    return this.canvasService.flipCanvas(canvas, flip);
  }

  // DESKTOP
  async desktop(): Promise<Desktop> {
    return this.desktopService.desktop();
  }

  // DIVERSE
  async activeObjects() {
    return this.diverseService.activeObjects();
  }

  async autoSuspend() {
    return this.diverseService.autoSuspend();
  }

  async createProcess() {
    return this.diverseService.createProcess();
  }

  async debugObjects() {
    return this.diverseService.debugObjects();
  }

  // EVENT
  async eventData() {
    return this.eventService.eventData();
  }

  async eventId() {
    return this.eventService.eventId();
  }

  async eventSource() {
    return this.eventService.eventSource();
  }

  async eventX() {
    return this.eventService.eventX();
  }

  async eventY() {
    return this.eventService.eventY();
  }

  async eventZ() {
    return this.eventService.eventZ();
  }

  async flushEvents() {
    return this.eventService.flushEvents();
  }

  async hotKeyEvent() {
    return this.eventService.hotKeyEvent();
  }

  async peekEvent() {
    return this.eventService.peekEvent();
  }

  async waitEvent() {
    return this.eventService.waitEvent();
  }

  // GADGET
  async activateGadget() {
    return this.gadgetService.activateGadget();
  }

  async clientHeight() {
    return this.gadgetService.clientHeight();
  }

  async clientWidth() {
    return this.gadgetService.clientWidth();
  }

  async disableGadget() {
    return this.gadgetService.disableGadget();
  }

  async enableGadget() {
    return this.gadgetService.enableGadget();
  }

  async freeGadget() {
    return this.gadgetService.freeGadget();
  }

  async gadgetFont() {
    return this.gadgetService.gadgetFont();
  }

  async gadgetGroup() {
    return this.gadgetService.gadgetGroup();
  }

  async gadgetHeight() {
    return this.gadgetService.gadgetHeight();
  }

  async gadgetText() {
    return this.gadgetService.gadgetText();
  }

  async gadgetWidth() {
    return this.gadgetService.gadgetWidth();
  }

  async gadgetX() {
    return this.gadgetService.gadgetX();
  }

  async gadgetY() {
    return this.gadgetService.gadgetY();
  }

  async hideGadget() {
    return this.gadgetService.hideGadget();
  }

  async queryObject() {
    return this.gadgetService.queryObject();
  }

  async setGadgetFont() {
    return this.gadgetService.setGadgetFont();
  }

  async setGadgetLayout() {
    return this.gadgetService.setGadgetLayout();
  }

  async setGadgetShape() {
    return this.gadgetService.setGadgetShape();
  }

  async setGadgetText() {
    return this.gadgetService.setGadgetText();
  }

  async showGadget() {
    return this.gadgetService.showGadget();
  }

  // HTML
  async createHtmlView() {
    return this.htmlService.createHtmlView();
  }

  async htmlViewBack() {
    return this.htmlService.htmlViewBack();
  }

  async htmlViewCurrentUrl() {
    return this.htmlService.htmlViewCurrentUrl();
  }

  async htmlViewEventUrl() {
    return this.htmlService.htmlViewEventUrl();
  }

  async htmlViewForward() {
    return this.htmlService.htmlViewForward();
  }

  async htmlViewGo() {
    return this.htmlService.htmlViewGo();
  }

  async htmlViewRun() {
    return this.htmlService.htmlViewRun();
  }

  async htmlViewStatus() {
    return this.htmlService.htmlViewStatus();
  }

  // ICON STRIP
  async freeIconStrip() {
    return this.iconStripService.freeIconStrip();
  }

  async loadIconStrip() {
    return this.iconStripService.loadIconStrip();
  }

  async setGadgetIconStrip() {
    return this.iconStripService.setGadgetIconStrip();
  }

  // LIST TABBER
  async addGadgetItem() {
    return this.listTabberService.addGadgetItem();
  }

  async clearGadgetItems() {
    return this.listTabberService.clearGadgetItems();
  }

  async countGadgetItems() {
    return this.listTabberService.countGadgetItems();
  }

  async createComboBox() {
    return this.listTabberService.createComboBox();
  }

  async createListBox() {
    return this.listTabberService.createListBox();
  }

  async createTabber() {
    return this.listTabberService.createTabber();
  }

  async gadgetItemText() {
    return this.listTabberService.gadgetItemText();
  }

  async insertGadgetItem() {
    return this.listTabberService.insertGadgetItem();
  }

  async modifyGadgetItem() {
    return this.listTabberService.modifyGadgetItem();
  }

  async removeGadgetItem() {
    return this.listTabberService.removeGadgetItem();
  }

  async selectedGadgetItem() {
    return this.listTabberService.selectedGadgetItem();
  }

  async selectGadgetItem() {
    return this.listTabberService.selectGadgetItem();
  }

  // MENU
  async checkMenu() {
    return this.menuService.checkMenu();
  }

  async createMenu() {
    return this.menuService.createMenu();
  }

  async disableMenu() {
    return this.menuService.disableMenu();
  }

  async enableMenu() {
    return this.menuService.enableMenu();
  }

  async menuChecked() {
    return this.menuService.menuChecked();
  }

  async menuEnabled() {
    return this.menuService.menuEnabled();
  }

  async menuText() {
    return this.menuService.menuText();
  }

  async setMenuText() {
    return this.menuService.setMenuText();
  }

  async uncheckMenu() {
    return this.menuService.uncheckMenu();
  }

  async updateWindowMenu() {
    return this.menuService.updateWindowMenu();
  }

  async windowMenu() {
    return this.menuService.windowMenu();
  }

  // PANEL
  async createPanel() {
    return this.panelService.createPanel();
  }

  async setPanelColor() {
    return this.panelService.setPanelColor();
  }

  async setPanelImage() {
    return this.panelService.setPanelImage();
  }

  // PROGRESS BAR
  async createProgBar() {
    return this.progressBarService.createProgBar();
  }

  async updateProgBar() {
    return this.progressBarService.updateProgBar();
  }

  // REQUEST SERVICE
  async confirm() {
    return this.requestService.confirm();
  }

  async notify() {
    return this.requestService.notify();
  }

  async proceed() {
    return this.requestService.proceed();
  }

  async requestColor() {
    return this.requestService.requestColor();
  }

  async requestDir() {
    return this.requestService.requestDir();
  }

  async requestedBlue() {
    return this.requestService.requestedBlue();
  }

  async requestedGreen() {
    return this.requestService.requestedGreen();
  }

  async requestedRed() {
    return this.requestService.requestedRed();
  }

  async requestFile() {
    return this.requestService.requestFile();
  }

  async requestFont() {
    return this.requestService.requestFont();
  }

  // SLIDER
  async createSlider() {
    return this.sliderService.createSlider();
  }

  async setSliderRange() {
    return this.sliderService.setSliderRange();
  }

  async setSliderValue() {
    return this.sliderService.setSliderValue();
  }

  async sliderValue() {
    return this.sliderService.sliderValue();
  }

  // TEXT AREA
  async addTextAreaText() {
    return this.textAreaService.addTextAreaText();
  }

  async createTextArea() {
    return this.textAreaService.createTextArea();
  }

  async formatTextAreaText() {
    return this.textAreaService.formatTextAreaText();
  }

  async lockTextArea() {
    return this.textAreaService.lockTextArea();
  }

  async setTextAreaColor() {
    return this.textAreaService.setTextAreaColor();
  }

  async setTextAreaFont() {
    return this.textAreaService.setTextAreaFont();
  }

  async setTextAreaTabs() {
    return this.textAreaService.setTextAreaTabs();
  }

  async setTextAreaText() {
    return this.textAreaService.setTextAreaText();
  }

  async textAreaChar() {
    return this.textAreaService.textAreaChar();
  }

  async textAreaCursor() {
    return this.textAreaService.textAreaCursor();
  }

  async textAreaLen() {
    return this.textAreaService.textAreaLen();
  }

  async textAreaLine() {
    return this.textAreaService.textAreaLine();
  }

  async textAreaLineLen() {
    return this.textAreaService.textAreaLineLen();
  }

  async textAreaSelLen() {
    return this.textAreaService.textAreaSelLen();
  }

  async textAreaText() {
    return this.textAreaService.textAreaText();
  }

  async unlockTextArea() {
    return this.textAreaService.unlockTextArea();
  }

  // TEXT FIELD
  async createLabel() {
    return this.textFieldService.createLabel();
  }

  async createTextField() {
    return this.textFieldService.createTextField();
  }

  async textFieldText() {
    return this.textFieldService.textFieldText();
  }

  // TOOLBAR
  async createToolBar() {
    return this.toolbarService.createToolBar();
  }

  async disableToolBarItem() {
    return this.toolbarService.disableToolBarItem;
  }

  async enableToolBarItem() {
    return this.toolbarService.enableToolBarItem();
  }

  async setToolBarTips() {
    return this.toolbarService.setToolBarTips();
  }

  // TREE VIEW
  async addTreeViewNode() {
    return this.treeViewService.addTreeViewNode();
  }

  async collapseTreeViewNode() {
    return this.treeViewService.collapseTreeViewNode();
  }

  async countTreeViewNodes() {
    return this.treeViewService.countTreeViewNodes();
  }

  async createTreeView() {
    return this.treeViewService.createTreeView();
  }

  async expandTreeViewNode() {
    return this.treeViewService.expandTreeViewNode();
  }

  async freeTreeViewNode() {
    return this.treeViewService.freeTreeViewNode();
  }

  async insertTreeViewNode() {
    return this.treeViewService.insertTreeViewNode();
  }

  async modifyTreeViewNode() {
    return this.treeViewService.modifyTreeViewNode();
  }

  async selectedTreeViewNode() {
    return this.treeViewService.selectedTreeViewNode();
  }

  async selectTreeViewNode() {
    return this.treeViewService.selectTreeViewNode();
  }

  async treeViewNodeText() {
    return this.treeViewService.treeViewNodeText();
  }

  async treeViewRoot() {
    return this.treeViewService.treeViewRoot();
  }

  // WINDOW
  async activateWindow() {
    return this.windowService.activateWindow();
  }

  async activeWindow() {
    return this.windowService.activeWindow();
  }

  async createWindow() {
    return this.windowService.createWindow();
  }

  async maximizeWindow() {
    return this.windowService.maximizeWindow();
  }

  async minimizeWindow() {
    return this.windowService.minimizeWindow();
  }

  async restoreWindow() {
    return this.windowService.restoreWindow();
  }

  async setMinWindowSize() {
    return this.windowService.setMinWindowSize();
  }

  async setStatusText() {
    return this.windowService.setStatusText();
  }

  async windowMaximized() {
    return this.windowService.windowMaximized();
  }

  async windowMinimized() {
    return this.windowService.windowMinimized();
  }
}
