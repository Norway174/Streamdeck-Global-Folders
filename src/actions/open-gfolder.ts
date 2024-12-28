import { action, KeyDownEvent, SingletonAction, WillAppearEvent, streamDeck, DidReceiveSettingsEvent } from "@elgato/streamdeck";

/**
 * Action that opens the selected Global Folder profile.
 */
@action({ UUID: "com.norway174.global.folders.opengfolder" })
export class OpenGFolder extends SingletonAction<GFolderSettings> {
	/**
	 * The {@link SingletonAction.onWillAppear} event is useful for setting the visual representation of an action when it becomes visible. This could be due to the Stream Deck first
	 * starting up, or the user navigating between pages / folders etc.. There is also an inverse of this event in the form of {@link streamDeck.client.onWillDisappear}. In this example,
	 * we're setting the title to the "Global Folder" that is selected in {@link OpenGFolder.onKeyDown}.
	 */
	override onWillAppear(ev: WillAppearEvent<GFolderSettings>): void | Promise<void> {
		const folderName = ev.payload.settings.gfolder ?? "Select Folder";
		const folderNumber = folderName.replace("Global Folder ", "");
		return ev.action.setTitle(folderNumber);
	}

	/**
	 * Listens for the {@link SingletonAction.onKeyDown} event which is emitted by Stream Deck when an action is pressed. Stream Deck provides various events for tracking interaction
	 * with devices including key down/up, dial rotations, and device connectivity, etc. When triggered, {@link ev} object contains information about the event including any payloads
	 * and action information where applicable. In this example, our action will open the selected global folder.
	 */
	override async onKeyDown(ev: KeyDownEvent<GFolderSettings>): Promise<void> {
		console.log(`Folder button pressed`);
		streamDeck.logger.info(`Folder button pressed`);
		const folder = ev.payload.settings.gfolder;
		if (folder) {
			// Logic to open the selected global folder
			//console.log(`Opening Global Folder: ${folder}`);
			streamDeck.logger.info(`Opening Global Folder: ${folder}`);
			streamDeck.profiles.switchToProfile(ev.action.device.id, folder);
		}
	}

	override onDidReceiveSettings(ev: DidReceiveSettingsEvent<GFolderSettings>): void | Promise<void> {
		const folderName = ev.payload.settings.gfolder ?? "Select Folder";
		const folderNumber = folderName.replace("Global Folder ", "");
		return ev.action.setTitle(folderNumber);
	}
}

/**
 * Settings for {@link OpenGFolder}.
 */
type GFolderSettings = {
	gfolder?: string;
};
