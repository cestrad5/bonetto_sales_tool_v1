/*
  Warnings:

  - You are about to drop the column `nombre` on the `Pedido` table. All the data in the column will be lost.
  - You are about to alter the column `fecha` on the `Pedido` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - Added the required column `cliente` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referencia` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pedido` DROP COLUMN `nombre`,
    ADD COLUMN `cliente` VARCHAR(191) NOT NULL,
    MODIFY `fecha` DATETIME(3) NOT NULL,
    MODIFY `total` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Producto` ADD COLUMN `referencia` VARCHAR(191) NOT NULL,
    MODIFY `precio` INTEGER NOT NULL;
