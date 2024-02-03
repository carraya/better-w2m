create table "public"."event" (
    "id" uuid not null default gen_random_uuid(),
    "name" character varying not null,
    "start_date" timestamp with time zone not null,
    "end_date" timestamp with time zone not null,
    "created_at" timestamp with time zone not null default now()
);


CREATE UNIQUE INDEX event_pkey ON public.event USING btree (id);

alter table "public"."event" add constraint "event_pkey" PRIMARY KEY using index "event_pkey";


