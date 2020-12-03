<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Projets;
use App\Form\ArticleType;
use App\Form\ProjetType;
use App\Repository\ArticleRepository;
use App\Repository\ProjetsRepository;
use Doctrine\ORM\EntityManagerInterface;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

class BlogController extends AbstractController
{

    /**
     * @Route("/blog", name="blog")
     * @IsGranted("ROLE_ADMIN")
     */
    public function index(ArticleRepository $repo, ProjetsRepository $reprojet)
    {
        $articles = $repo->findAll();
        $projets = $reprojet->findAll();
        return $this->render('blog/index.html.twig', [
            'controller_name' => 'BlogController',
            'articles' => $articles,
            'projets' => $projets
        ]);
        
    }
    
    /** 
     * @Route("/", name="home")
     */
    public function home() {

        return $this->render('blog/home.html.twig');
    }
    /**
     * @Route("/blog/new", name="blog_create")
     * @Route("/blog/{id}/edit", name="blog_edit")
     * @IsGranted("ROLE_ADMIN")
     */
    public function form(Article $article = null, Request $request, EntityManagerInterface $manager) {
        
        if(!$article) {
            $article = new Article();
        }

        $form = $this->createForm(ArticleType::class, $article);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {

            $manager->persist($article);
            $manager->flush();

            return $this->redirectToRoute('blog', ['id' => $article->getId()]);
        }

        return $this->render('blog/create.html.twig', [
            'formArticle' => $form->createView(),
            'editMode' => $article->getId() !== null,
        ]);
    }

    /**
     * @Route("/blog/newPro", name="pro_create")
     * @Route("/blog/{id}/editpro", name="pro_edit")
     *@IsGranted("ROLE_ADMIN")
     */ 
    public function formPro(Projets $projet = null, Request $request, EntityManagerInterface $manager) {
        
        if(!$projet) {
            $projet = new Projets();
        }
        $formPro = $this->createForm(ProjetType::class, $projet);

        $formPro->handleRequest($request);
        
        if($formPro->isSubmitted() && $formPro->isValid()) {

            $manager->persist($projet);
            $manager->flush();
    
            return $this->redirectToRoute('blog', ['id' => $projet->getId()]);

        };
        return $this->render('blog/createPro.html.twig', [

            'formPro' => $formPro->createView(),
            'editMode' => $projet->getId() !== null,
        ]);
    }               
    

    /**
     *@Route("/blog/{id}/delete", name="article_delete")
     *@IsGranted("ROLE_ADMIN")
     */
    public function delete(Article $article) {
        $em = $this->getDoctrine()->getManager();
        $em->remove($article);
        $em->flush();
        $this->addFlash('success', 'Article Supprimé! ');
        return $this->redirectToRoute('blog');
        
    }
    /**
     *@Route("/blog/{id}/deletepro", name="pro_delete")
     *@IsGranted("ROLE_ADMIN")
     */
    public function deletePro(Projets $projet) {
        $em = $this->getDoctrine()->getManager();
        $em->remove($projet);
        $em->flush();
        $this->addFlash('success', 'Projet Supprimé! ');
        return $this->redirectToRoute('blog');
        
    }
  
}
