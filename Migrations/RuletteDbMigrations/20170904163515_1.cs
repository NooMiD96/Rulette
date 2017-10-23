using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Rulette.Migrations.RuletteDbMigrations
{
    public partial class _1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Inventory",
                table: "Inventory");

            migrationBuilder.DropIndex(
                name: "IX_Inventory_InventoryId",
                table: "Inventory");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Inventory",
                table: "Inventory",
                column: "InventoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Inventory",
                table: "Inventory");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Inventory",
                table: "Inventory",
                columns: new[] { "InventoryId", "ItemListId" });

            migrationBuilder.CreateIndex(
                name: "IX_Inventory_InventoryId",
                table: "Inventory",
                column: "InventoryId",
                unique: true);
        }
    }
}
