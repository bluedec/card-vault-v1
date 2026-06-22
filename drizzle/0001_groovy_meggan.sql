CREATE TABLE `cards` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`game` text NOT NULL,
	`rarity` text NOT NULL,
	`card_number` text NOT NULL,
	`condition` text NOT NULL,
	`image_url` text NOT NULL,
	`description` text,
	`price` integer NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE `users` ADD `email` text;