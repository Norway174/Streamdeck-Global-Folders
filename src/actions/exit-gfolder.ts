import { action, KeyDownEvent, SingletonAction, streamDeck, JsonValue } from "@elgato/streamdeck";

/**
 * Action that exits the current Global Folder profile.
 */
@action({ UUID: "com.norway174.global.folders.exitgfolder" })
export class ExitGFolder extends SingletonAction<Record<string, JsonValue>> {
	/**
	 * Listens for the {@link SingletonAction.onKeyDown} event which is emitted by Stream Deck when an action is pressed. When triggered, {@link ev} object contains information about the event
	 * including any payloads and action information where applicable. In this example, our action will switch to the previous folder by setting the profile to an empty string.
	 */
	override async onKeyDown(ev: KeyDownEvent<Record<string, JsonValue>>): Promise<void> {
		console.log(`Exit button pressed`);
		streamDeck.logger.info(`Exit button pressed`);
		streamDeck.profiles.switchToProfile(ev.action.device.id, "");
	}
}

