import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});

Voici les principales fonctionnalités de cette application :

- Affichage d'un Sudoku 9x9 avec des cases modifiables
- Bouton "Solve" pour résoudre le Sudoku
- Algorithme de résolution du Sudoku implémenté dans la fonction `solveSudoku`
- Design rose bonbon avec Tailwind CSS

Pour lancer l'application, vous pouvez utiliser la commande `npm run dev` après avoir installé les dépendances avec `npm install`.