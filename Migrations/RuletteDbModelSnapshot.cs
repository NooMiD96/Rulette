﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using Rulette.MyDb;
using System;

namespace Rulette.Migrations
{
    [DbContext(typeof(RuletteDb))]
    partial class RuletteDbModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Rulette.MyDb.Inventory", b =>
                {
                    b.Property<string>("InventoryId")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(30);

                    b.HasKey("InventoryId");

                    b.ToTable("Inventories");
                });

            modelBuilder.Entity("Rulette.MyDb.Item", b =>
                {
                    b.Property<int>("ItemId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ImgUrl");

                    b.Property<string>("InventoryId");

                    b.Property<string>("ItemName");

                    b.Property<int?>("Number")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(1);

                    b.Property<bool?>("Owner")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(true);

                    b.HasKey("ItemId");

                    b.HasIndex("InventoryId");

                    b.ToTable("Items");
                });

            modelBuilder.Entity("Rulette.MyDb.User", b =>
                {
                    b.Property<string>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(30);

                    b.Property<string>("InventoryId")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.HasKey("UserId");

                    b.HasIndex("InventoryId")
                        .IsUnique();

                    b.ToTable("User");
                });

            modelBuilder.Entity("Rulette.MyDb.Item", b =>
                {
                    b.HasOne("Rulette.MyDb.Inventory")
                        .WithMany("ItemList")
                        .HasForeignKey("InventoryId");
                });

            modelBuilder.Entity("Rulette.MyDb.User", b =>
                {
                    b.HasOne("Rulette.MyDb.Inventory", "Inventory")
                        .WithOne("User")
                        .HasForeignKey("Rulette.MyDb.User", "InventoryId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}