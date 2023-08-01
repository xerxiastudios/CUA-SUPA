CREATE TABLE IF NOT EXISTS "entry" (
	"id" serial PRIMARY KEY NOT NULL,
	"entry_day" date,
	"url_front_photo_thumbnail" text,
	"url_front_photo_hd" text,
	"url_back_photo_thumbnail" text,
	"url_back_photo_hd" text,
	"user_id" serial NOT NULL,
	"created_at" date DEFAULT now(),
	"updated_at" date
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"created_at" date DEFAULT now(),
	"updated_at" date
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "entry" ADD CONSTRAINT "entry_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
