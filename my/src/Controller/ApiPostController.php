<?php

namespace App\Controller;


use App\Repository\ArticleRepository;
use App\Repository\ProjetsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiPostController extends AbstractController
{
    /**
     * @Route("/api/articles", name="api_articles_index", methods={"GET"})
     */
    public function index(ArticleRepository $articleRepository): Response
    {
        return $this->json($articleRepository->findAll(), 200, []);

    }

    /**
     * @Route("/api/projets", name="api_projets_index", methods={"GET"})
     */
    public function projets(ProjetsRepository $projetsRepository): Response
    {
        return $this->json($projetsRepository->findAll(), 200, []);

    }

}