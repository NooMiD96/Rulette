using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Rulette.MyDb {
    public class RuletteDb : DbContext {
        static object Lock { get; set; } = new object();

        public RuletteDb(DbContextOptions<RuletteDb> options) : base(options) { }

        public DbSet<User> User { get; set; }
        public DbSet<Inventory> Inventories { get; set; }
        public DbSet<Item> Items { get; set; }
        //public DbSet<InventoryItem> ItemList { get; set; }
        //public DbSet<Bets> Bets { get; set; }
        //public DbSet<BetItem> BetsList { get; set; }

        private Task<bool> TaskAddNewUser(string userId) {
            return Task.Run(() => {
                var db = this;
                var user = db.User
                    .Where(item => item.UserId == userId)
                    .FirstOrDefault();
                if(user != null) return false;

                var newUser = new User() {
                    UserId = userId,
                    InventoryId = userId,
                    //BetsId = userId,
                };
                var newInventory = new Inventory() {
                    InventoryId = userId,
                    //ItemListId = userId,
                };
                newUser.Inventory = newInventory;
                lock(Lock) {
                    db.User.Add(newUser);
                    //db.Inventory.Add(newInventory);

                    db.SaveChanges();
                }

                return true;
            });
        }
        private Task<bool> TaskAddNewItem(string itemName, string userId) {
            return Task.Run(() => {
                var db = this;
                var user = db.User
                    .Include(t => t.Inventory)
                    .ThenInclude(t => t.ItemList)
                    .Where(t => t.UserId == userId)
                    .FirstOrDefault();
                if(user == null) return false;

                var newItem = new Item() {
                    //ItemListId = userId,
                    ItemName = itemName,
                    ImgUrl = null,
                };

                lock(Lock) {
                    //db.Items.Add(newItem);
                    user.Inventory.ItemList.Add(newItem);

                    db.SaveChanges();
                }
                return true;
            });
        }
        //private Task<bool> TaskDeleteItem(int itemId, string userId) {
        //    return Task.Run(() => {
        //        var db = this;
        //        var user = db.User
        //            .Include(t => t.Inventory)
        //            .ThenInclude(t => t.ItemList)
        //            .Where(t => t.UserId == userId)
        //            .FirstOrDefault();
        //        if (user == null) return false;

        //        var item = user.Inventory.ItemList
        //            .FirstOrDefault(t => t.ItemId == itemId);
        //        if (item == null) return false;

        //        lock (Lock) {
        //            user.Inventory.ItemList.Remove(item);

        //            db.SaveChanges();
        //        }
        //        return true;
        //    });
        //}

        public async Task<bool> AddNewUserAsync(string userId) {
            return await TaskAddNewUser(userId);
        }
        public async Task<bool> AddNewItemAsync(string itemName, string userId) {
            return await TaskAddNewItem(itemName, userId);
        }
        //public async Task<bool> DeleteItemAsync(int itemId, string userId) {
        //    return await TaskDeleteItem(itemId, userId);
        //}

        //public async Task<bool> GetUserStateAsync(string userId) {


        //    return await TaskDeleteItem(1, userId);
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Item>()
                .Property(t => t.Owner)
                .HasDefaultValue(true);
            modelBuilder.Entity<Item>()
                .Property(t => t.Number)
                .HasDefaultValue(1);
            //    modelBuilder.Entity<User>()
            //        .HasOne(item => item.Inventory)
            //        .WithOne(item => item.User)
            //        .HasForeignKey<Inventory>(item => item.InventoryId);

            //    modelBuilder.Entity<User>()
            //        .HasMany(item => item.Bets)
            //        .WithOne(item => item.User)
            //        .HasPrincipalKey(item => item.BetsId)
            //        .HasForeignKey(item => item.BetsId);

            //    modelBuilder.Entity<Bets>()
            //        .HasMany(item => item.BetsList)
            //        .WithOne(item => item.Bets)
            //        .HasPrincipalKey(item => item.BetId)
            //        .HasForeignKey(item => item.BetId);

            //    modelBuilder.Entity<Inventory>()
            //        .HasMany(item => item.ItemList)
            //        .WithOne(item => item.Inventory)
            //        .HasPrincipalKey(item => item.ItemListId)
            //        .HasForeignKey(item => item.ItemListId);
        }
    }
    //public class User {
    //    [MaxLength(30), Required]
    //    public string UserId { get; set; }
    //    [MaxLength(30), Required]
    //    public string InventoryId { get; set; }
    //    [MaxLength(30), Required]
    //    public string BetsId { get; set; }
    //    //children
    //    public Inventory Inventory { get; set; }

    //    public User() { Bets = new List<Bets>(); }
    //    public ICollection<Bets> Bets { get; set; }
    //}
    //public class Bets {
    //    [MaxLength(30), Required]
    //    public string BetsId { get; set; }
    //    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    //    public int BetId { get; set; }
    //    public DateTime Date { get; set; }

    //    //parent
    //    public User User { get; set; }
    //    //children
    //    public Bets() { BetsList = new List<BetItem>(); }
    //    public ICollection<BetItem> BetsList { get; set; }
    //}
    //public class BetItem : Item {
    //    [Required]
    //    public int BetId { get; set; }
    //    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    //    public int Id { get; set; }

    //    //parent
    //    public Bets Bets { get; set; }
    //}
    //public class Inventory {
    //    [MaxLength(30)]
    //    public string InventoryId { get; set; }
    //    [MaxLength(30)]
    //    public string ItemListId { get; set; }
    //    //parent
    //    public User User { get; set; }
    //    //children
    //    public Inventory() { ItemList = new List<InventoryItem>(); }
    //    public ICollection<InventoryItem> ItemList { get; set; }
    //}
    //public class InventoryItem : Item {
    //    [MaxLength(30), Required]
    //    public string ItemListId { get; set; }
    //    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    //    public int ItemId { get; set; }
    //    //parent
    //    public Inventory Inventory { get; set; }
    //}
    //public class Item {
    //    public string ItemName { get; set; }
    //    public double ItemCost { get; set; }
    //}

    public class User {
        [MaxLength(30), Required, Key]
        public string UserId { get; set; }
        [MaxLength(30), Required, ForeignKey(nameof(Inventory))]
        public string InventoryId { get; set; }
        //[MaxLength(30), Required, ForeignKey(nameof(Bets))]
        //public string BetsId { get; set; }

        //children
        public Inventory Inventory { get; set; }

        //public User() { Bets = new List<Bets>(); }
        //public ICollection<Bets> Bets { get; set; }
    }

    public class Inventory {
        [MaxLength(30), Required, Key]
        public string InventoryId { get; set; }

        //parent
        public User User { get; set; }

        //children
        public Inventory() { ItemList = new List<Item>(); }
        public ICollection<Item> ItemList { get; set; }
    }

    public class Item {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ItemId { get; set; }

        public string ItemName { get; set; }
        public string ImgUrl { get; set; }
        public bool? Owner { get; set; }
        public int? Number { get; set; }
    }
}
