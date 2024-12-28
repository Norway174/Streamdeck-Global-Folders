import streamDeck, { LogLevel } from "@elgato/streamdeck";

//import { IncrementCounter } from "./actions/increment-counter";
import { OpenGFolder } from "./actions/open-gfolder"; // Add this import
import { ExitGFolder } from "./actions/exit-gfolder"; // Add this import

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the increment action.
streamDeck.actions.registerAction(new OpenGFolder()); // Register the new action
streamDeck.actions.registerAction(new ExitGFolder()); // Register the new action

// Finally, connect to the Stream Deck.
streamDeck.connect();
