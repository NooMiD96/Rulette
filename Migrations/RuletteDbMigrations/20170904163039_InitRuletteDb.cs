using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Rulette.Migrations.RuletteDbMigrations
{
    public partial class InitRuletteDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    BetsId = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    InventoryId = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserId);
                    table.UniqueConstraint("AK_User_BetsId", x => x.BetsId);
                });

            migrationBuilder.CreateTable(
                name: "Bets",
                columns: table => new
                {
                    BetId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BetsId = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bets", x => x.BetId);
                    table.ForeignKey(
                        name: "FK_Bets_User_BetsId",
                        column: x => x.BetsId,
                        principalTable: "User",
                        principalColumn: "BetsId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Inventory",
                columns: table => new
                {
                    InventoryId = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    ItemListId = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Inventory", x => new { x.InventoryId, x.ItemListId });
                    table.UniqueConstraint("AK_Inventory_ItemListId", x => x.ItemListId);
                    table.ForeignKey(
                        name: "FK_Inventory_User_InventoryId",
                        column: x => x.InventoryId,
                        principalTable: "User",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BetsList",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BetId = table.Column<int>(type: "int", nullable: false),
                    ItemCost = table.Column<double>(type: "float", nullable: false),
                    ItemName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BetsList", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BetsList_Bets_BetId",
                        column: x => x.BetId,
                        principalTable: "Bets",
                        principalColumn: "BetId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ItemList",
                columns: table => new
                {
                    ItemId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ItemCost = table.Column<double>(type: "float", nullable: false),
                    ItemListId = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    ItemName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemList", x => x.ItemId);
                    table.ForeignKey(
                        name: "FK_ItemList_Inventory_ItemListId",
                        column: x => x.ItemListId,
                        principalTable: "Inventory",
                        principalColumn: "ItemListId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Bets_BetsId",
                table: "Bets",
                column: "BetsId");

            migrationBuilder.CreateIndex(
                name: "IX_BetsList_BetId",
                table: "BetsList",
                column: "BetId");

            migrationBuilder.CreateIndex(
                name: "IX_Inventory_InventoryId",
                table: "Inventory",
                column: "InventoryId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ItemList_ItemListId",
                table: "ItemList",
                column: "ItemListId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BetsList");

            migrationBuilder.DropTable(
                name: "ItemList");

            migrationBuilder.DropTable(
                name: "Bets");

            migrationBuilder.DropTable(
                name: "Inventory");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
