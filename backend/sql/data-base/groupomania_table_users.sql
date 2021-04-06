
-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `mail` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_pict` varchar(255) NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `bio` text,
  `admin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `mail`, `password`, `user_pict`, `firstname`, `lastname`, `bio`, `admin`) VALUES
(127, 'test111@exp.com', '$2b$10$sSVft2w99s1NRWHF/sXcjeZ9shykBCvgjrJCakTZobq.nCZMEhHru', '', 'Antoine', 'Dupont', 'test deco reco ok', NULL),
(128, 'test.login@test.com', '$2b$10$RcQYH4bDan.SRdf/IUhnnOPTcUlLIMAycxc4fAy9dutH4cg1Yr5By', 'http://localhost:3000/images/profilpic_1617650620295.png', 'Antoine', 'Talon', 'Je personnalise mon profile ', NULL),
(129, 'test@exp.com', '$2b$10$5GKw3FribLHU9AJED/WBDuD6SqustzHon4ao4CwPXEVrpU3U3B7dq', '', 'Daniel', 'Dupont', 'J\'ajoute ma', NULL),
(130, 'test1010@exp.com', '$2b$10$Dt/a3VOyvrgmHK2j4dHaB.R43fVGHblVy7l1OVp0GzLez.N3RMmA.', '', 'Achille', 'Talon', 'ertetretretre', NULL);
